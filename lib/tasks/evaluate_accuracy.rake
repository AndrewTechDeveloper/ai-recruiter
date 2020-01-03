namespace :evaluate_accuracy do
  desc "evaluate random"
  task :random => :environment do
    applicants = Applicant.all
    accuracy = []
    applicants.each do |applicant|
      precision = []
      applicant.applicant_companies.each.with_index(1) do |ac, idx|
        precision << idx / ac.company_rank
      end
      accuracy << precision.sum / precision.size.to_f
      p '----accuracy rate----'
      p accuracy.sum / accuracy.size.to_f
    end
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
  end

  desc "evaluate ahp"
  task :ahp => :environment do
    def AHP(companies, applicant)
      hash_array = []
      companies.each do |company|
        wor = company.working_hours * applicant.working_hours.to_f
        cor = company.consume_day_off * applicant.consume_day_off.to_f
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
      hash_array.sort_by!{ |k| k[:evaluation] }.reverse!
      return hash_array.map{|v| v[:id]}
    end

    applicants = Applicant.all
    accuracy = []
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
      p '----accuracy rate----'
      p accuracy.sum / accuracy.size.to_f
    end
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
  end

  desc "evaluate svm"
  task :svm => :environment do
    require 'pycall/import'
    include PyCall::Import
    pyimport 'keras'
    pyfrom 'keras.datasets', import: 'mnist'
    pyfrom 'keras.models', import: 'Sequential'
    pyfrom 'keras.layers', import: ['Dense', 'Dropout', 'Flatten']
    pyfrom 'keras.layers', import: ['Conv2D', 'MaxPooling2D']


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
    model.fit(x_train_reshape_std ,y_train ,epochs=2)

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
