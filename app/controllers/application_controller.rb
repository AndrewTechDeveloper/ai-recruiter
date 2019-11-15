class ApplicationController < ActionController::API
  def job_categorizer(category)
    case category
    when "銀行（都市・信託・政府系）、信金"
      1
    when "証券会社、投資ファンド、投資関連"
      2
    when "生命保険、損害保険"
      3
    when "投信投資顧問"
      4
    when "クレジット、信販、リース"
      5
    when "商品取引"
      6
    when "消費者金融、事業者金融"
      7
    when "その他金融関連"
      8
    when "コンサルティング、シンクタンク"
      9
    when "監査法人、税理士法人、法律事務所"
      10
    when "SIer、ソフト開発、システム運用"
      11
    when "インターネット"
      12
    when "通信、ISP、データセンター"
      13
    when "制御システム、組込みソフトウェア"
      14
    when "その他ＩＴ・通信関連"
      15
    when "電力、ガス、エネルギー"
      16
    when "航空、鉄道、運輸、倉庫"
      17
    when "不動産関連、住宅"
      18
    when "建築、土木、設備工事"
      19
    when "総合商社"
      20
    when "総合電機、家電、AV機器"
      21
    when "自動車、自動車部品、輸送機器"
      22
    when "コンピュータ、通信機器、OA機器関連"
      23
    when "半導体、電子、精密機器"
      24
    when "重電、産業用電気機器、プラント関連"
      25
    when "鉄鋼、非鉄金属"
      26
    when "機械関連"
      27
    when "化学、石油、ガラス、セラミック"
      28
    when "食品、飲料"
      29
    when "日用品、化粧品"
      30
    when "ファッション、アパレル、繊維"
      31
    when "インテリア、雑貨、文具、スポーツ"
      32
    when "印刷、紙・パルプ、書籍、パネル"
      33
    when "住宅設備、建材、エクステリア"
      34
    when "ゲーム関連、玩具"
      35
    when "その他メーカー・商社"
      36
    when "医薬品、医療機器"
      37
    when "治験、臨床試験、医薬営業受託"
      38
    when "調剤薬局"
      39
    when "バイオ関連"
      40
    when "病院、医療機関"
      41
    when "その他医療・医薬サービス"
      42
    when "放送、出版、新聞、映像、音響"
      43
    when "広告代理店、PR、SP、デザイン"
      44
    when "その他マスコミ関連"
      45
    when "小売（百貨店・専門・CVS・量販店）"
      46
    when "通信販売"
      47
    when "物品レンタル"
      48
    when "フードサービス、飲食"
      49
    when "旅行、ホテル、旅館、レジャー"
      50
    when "冠婚葬祭"
      51
    when "人材サービス"
      52
    when "コールセンター、業務請負"
      53
    when "情報サービス、リサーチ"
      54
    when "教育、研修サービス"
      55
    when "警備、メンテナンス"
      56
    when "介護、福祉関連サービス"
      57
    when "美容、エステ、リラクゼーション"
      58
    when "環境サービス"
      59
    when "受託製造（設計・開発・加工）"
      60
    when "その他小売、外食、レジャー、サービス"
      61
    when "官公庁"
      62
    when "独立行政、社団、財団、学校法人"
      63
    when "非政府組織(NGO)、非営利団体(NPO)"
      64
    when "農業、林業、水産、畜産"
      65
    when "鉱業"
      66
    else
      0
    end
  end

  def job_type_categorizer(type)
    case type
    when '営業'
      1
    when 'エンジニア'
      2
    when 'SE'
      3
    when 'コンサルタント'
      4
    when 'マーケティング'
      5
    when '投資銀行'
      6
    when '金融'
      7
    when '企画'
      8
    when '事務'
      9
    when '総合職'
      10
    when '一般職'
      11
    when '人事'
      12
    when '管理'
      13
    when '監査'
      14
    when 'マネージャー'
      15
    else
      0
    end
  end
end
