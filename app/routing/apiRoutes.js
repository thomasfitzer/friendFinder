var path = require('path');

var matches = require('path');

module.exports = function(app) {
    console.log("Module successfully exported.");

    app.get('/api/friends', function(req, res) {
        res.json(matches);
    });

    app.post('/api/friends', function (req,res){
        var customerInput = req.body;
        

        var customerResponses = customerInput.scores;
        

        var matchMoniker = '';
        var matchPic = '';
        var bigDiff = 5000;

        for (var i = 0; i < matches.length; i++) {
           

            var diff = 0;
            for (var m = 0; m <customerResponses.length; m++) {
                diff += Math.abs(matches[i].scores[m] - customerResponses[m]);
            }
            if (diff < bigDiff) {
                console.log("Best match located = " + diff);
                console.log("Friend moniker = " + matches[i].name);
                console.log("Friend pic = " + matches[i].photo);

                totalDiff = diff;
                matchMoniker = matches[i].name;
                matchPic = matches[i].photo;
            }
        }
        matches.push(customerInput);

        res.json({status: "Okeedokee", matchMoniker: matchMoniker, matchPic: matchPic})
    });
};







