## Installation
npm install
node app.js
## Create Dataset 
mongoimport --db RealEstate --collection markethealths --type csv --file /MarketHealthIndex_City.csv --fields RegionType,RegionName,City,State,Metro,CBSATitle,SizeRank,MarketHealthIndex,SellForGain,PrevForeclosed,ForeclosureRatio,ZHVI,MoM,YoY,ForecastYoYPctChane,StockOfREOs,NegativeEquity,Delinquency,DaysOnMarke


