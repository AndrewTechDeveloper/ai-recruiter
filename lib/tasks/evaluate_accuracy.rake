namespace :evaluate_accuracy do
  desc "evaluate random"
  task :random => :environment do
    require 'csv'
    applicants = Applicant.all
    accuracy = []
    csv = []
    applicants.each do |applicant|
      precision = []
      applicant.applicant_companies.sort_by{|ac| ac.company_rank}.each.with_index(1) do |ac, idx|
        precision << idx / ac.company_rank.to_f
      end
      accuracy << precision.sum / precision.size.to_f
      csv << accuracy.sum / accuracy.size.to_f
      p '----accuracy rate----'
      p applicant.id
      p precision.sum / precision.size.to_f
    end
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
    CSV.open("random_map.csv", "w") do |row|
      row << [*1..100]
      row << accuracy
      row << csv
    end
  end

  desc "evaluate ahp"
  task :ahp => :environment do
    require 'csv'
    def AHP(companies, applicant)
      hash_array = []
      companies.each do |company|
        wor = (100 - company.working_hours) / 20 * applicant.working_hours.to_f
        cor = company.consume_day_off / 20 * applicant.consume_day_off.to_f
        sat = company.satisfaction * applicant.satisfaction.to_f
        mot = company.motivation * applicant.motivation.to_f
        tra = company.transparency * applicant.transparency.to_f
        res = company.respectable * applicant.respectable.to_f
        gro = company.growable * applicant.growable.to_f
        men = company.mentorship * applicant.mentorship.to_f
        com = company.compliance * applicant.compliance.to_f
        fai = company.fairness * applicant.fairness.to_f
        evaluation = wor + cor + sat + mot + tra + res + gro + men + com + fai
        hash = {:id => company.id, :name => company.name, :evaluation => evaluation}
        hash_array << hash
      end
      pp hash_array.sort_by!{ |k| k[:evaluation] }.reverse!
      return hash_array.map{|v| v[:id]}
    end

    applicants = Applicant.all
    accuracy = []
    csv = []
    applicants.each do |applicant|
      companies = Company
        .joins(:company_jobs)
        .where(industry_id: applicant.applicant_industries.pluck(:industry_id),
               company_jobs: {job_id: applicant.applicant_jobs.pluck(:job_id)})
        .distinct
      ahp = AHP(companies, applicant)
      ranks = applicant
        .applicant_companies
        .map{|ac| ahp.index(ahp.select{|s| s == ac.company_id}.join.to_i) + 1}
        .sort
      precision = []
      ranks.each.with_index(1) do |rank, idx|
        precision << idx / rank.to_f
      end
      accuracy << precision.sum / precision.size.to_f
      csv << accuracy.sum / accuracy.size.to_f
      p '----accuracy rate----'
      p applicant.id
      p precision.sum / precision.size.to_f
    end
    p "---map----"
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
    CSV.open("ahp_map.csv", "w") do |row|
      row << [*1..100]
      row << accuracy
      row << csv
    end
  end

  desc "evaluate svm"
  task :svm => :environment do
    require 'pycall/import'
    include PyCall::Import
    pyimport 'keras'
    pyimport 'numpy', as: "np"
    pyfrom 'keras.datasets', import: 'mnist'
    pyfrom 'keras.models', import: 'Sequential'
    pyfrom 'keras.layers', import: ['Dense', 'Dropout', 'Flatten']

    def set_data(data, x_array, y_array)
      data.each do |ac|
        item = []
        item << ac.applicant.age
        item << ac.applicant.gender
        item << ac.applicant.college.level
        item << ac.applicant.working_hours
        item << ac.applicant.consume_day_off
        item << ac.applicant.satisfaction
        item << ac.applicant.motivation
        item << ac.applicant.transparency
        item << ac.applicant.respectable
        item << ac.applicant.growable
        item << ac.applicant.mentorship
        item << ac.applicant.compliance
        item << ac.applicant.fairness
        x_array << item
        y_array << ac.company_id - 1
      end
    end

    x_train = []
    y_train = []
    x_test = []
    y_test = []
    ids = ApplicantCompany.all.pluck(:id)
    train_ids = ids.sample(ids.size * 0.8)
    test_ids = ids - train_ids
    set_data(ApplicantCompany.where(id: train_ids), x_train, y_train)
    set_data(ApplicantCompany.where(id: test_ids), x_test, y_test)
    x_train = np.asarray(x_train)
    x_test = np.asarray(x_test)
    y_train = keras.utils.to_categorical(y_train, 500)
    y_test = keras.utils.to_categorical(y_test, 500)

    model = Sequential.()
    model.add(Dense.(50, activation: 'relu'))
    model.add(Dense.(100, activation: 'relu'))
    model.add(Dense.(500, activation: 'softmax'))
    model.compile('rmsprop', 'categorical_crossentropy', metrics=['accuracy'])
    history = model.fit(x_train, y_train,
                        verbose: 1,
                        validation_data: [x_test, y_test])

    test = []
    test << history.history
    pp test
    score = model.evaluate(x_test, y_test)
    print(score[0])
    print(sprintf("Test loss: %.6f\n", score[0]))
    print(sprintf("Test accuracy: %.6f\n", score[1]))
    print(model.summary)
  end

  desc "evaluate mnist"
  task :mnist => :environment do
    require 'pycall/import'
    include PyCall::Import
    pyimport 'keras'
    pyfrom 'keras.datasets', import: 'mnist'
    pyfrom 'keras.models', import: 'Sequential'
    pyfrom 'keras.layers', import: ['Dense', 'Dropout', 'Flatten']

    (x_train, y_train), (x_test, y_test) = mnist.load_data()

    x_train_reshape = x_train.reshape(60000, 784)
    x_test_reshape = x_test.reshape(10000, 784)
    x_train_reshape_std = x_train_reshape.astype('float32') / 255
    x_test_reshape_std = x_test_reshape.astype('float32') / 255

    y_train = keras.utils.to_categorical(y_train, 10)
    y_test = keras.utils.to_categorical(y_test, 10)

    model = Sequential.()
    model.add(Dense.(512, activation: 'relu'))
    model.add(Dense.(10, activation: 'softmax'))
    model.compile('rmsprop', 'categorical_crossentropy', metrics=['accuracy'])
    model.fit(x_train_reshape_std, y_train, epochs=2)

    score = model.evaluate(x_test_reshape_std, y_test)
    print(sprintf("Test loss: %.6f\n", score[0]))
    print(sprintf("Test accuracy: %.6f\n", score[1]))
    print(model.summary)

    ### save weights
    pp model
    File.open('mnist_mlp_model.json', 'w'){|file| file.write(model)}
    model.save_weights('mnist_mlp_weights.h5')
  end

  desc "evaluate mnist"
  task :mnist => :environment do
    require 'pycall/import'
    include PyCall::Import
    pyimport 'keras'
    pyfrom 'keras.datasets', import: 'mnist'
    pyfrom 'keras.models', import: 'Sequential'
    pyfrom 'keras.layers', import: ['Dense', 'Dropout', 'Flatten']

    (x_train, y_train), (x_test, y_test) = mnist.load_data()

    x_train_reshape = x_train.reshape(60000, 784)
    x_test_reshape = x_test.reshape(10000, 784)
    x_train_reshape_std = x_train_reshape.astype('float32') / 255
    x_test_reshape_std = x_test_reshape.astype('float32') / 255

    y_train = keras.utils.to_categorical(y_train, 10)
    y_test = keras.utils.to_categorical(y_test, 10)

    model = Sequential.()
    model.add(Dense.(512, activation: 'relu'))
    model.add(Dense.(10, activation: 'softmax'))
    model.compile('rmsprop', 'categorical_crossentropy', metrics=['accuracy'])
    model.fit(x_train_reshape_std, y_train, epochs=2)

    score = model.evaluate(x_test_reshape_std, y_test)
    print(sprintf("Test loss: %.6f\n", score[0]))
    print(sprintf("Test accuracy: %.6f\n", score[1]))
    print(model.summary)

    ### save weights
    pp model
    File.open('mnist_mlp_model.json', 'w'){|file| file.write(model)}
    model.save_weights('mnist_mlp_weights.h5')
  end
end
