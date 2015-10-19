The goal of this exercise is to design and code a single page web application. Your application is to interface with an imaginary financial exchange.


The application should display a table of trade volume per ticker, and allow the user to add new trades.


The page should also display the total volume traded across all tickers.
When a user adds a trade, the value of that trade should contribute to the volume of existing tickers.
The data should be stored in-memory but your code should easily be able to hook into a remote API.
The goal is to create a modular, extensible, event driven application. It can be assumed the table will remain small and therefore rendering performance is not an
You may also assume you are the only person using this exchange and therefore no other users will be adding trades.
Using concepts and design patterns such as Model/View/Controller is strongly encouraged.
However relying on frameworks such as BackboneJS/EmberJS/AngularJS is not the purpose of this assignment.
You will code up this assignment in one main JavaScript file but you should assume your code should be split into modules.
It's okay if your code only runs on modern browsers, such as Chrome.
Feel free to use someone else's EventDispatcher if necessary.
The look/CSS of the page/table/inputs is not important.
Using jQuery and/or UnderscoreJS is allowed and is included in the test HTML.
Sample data:
[{tickeri’APPL', volume:6},{ticker:'MSFT', volumeiSjyCticken’GE', volumenOjyCticken'DIS’, volume^jvCticken’PEP’, volume:1},{ticker:'T', volume:5}]
Sample table:
EXCHANGE DATA
Ticker	Trade Volume
GE	10
MSFT	8
APPL	6
T	5
DIS	2
PEP	1
Submit
Table after adding 9 to APPL
EXCHANGE DATA
Ticker	Trade Volume
APPL	15
GE	10
MSFT	3
T	5
DIS	2
PEP	1
Table after adding new ticker IBM with volume 12
EXCHANGE DATA
Ticker	Trade Volume
APPL	15
IBM	12
GE	10
MSFT	3
T	5
DIS	2
PEP	1
