const express =  require('express');

const fakeNewRouter = express.Router();
const fakeNewController = require('../controllers/fakeNewController')
fakeNewRouter.get("/", async (req,res)=>{
    try {
        const claim = req.query.claim;
        const result = await fakeNewController.fakeNewChecker(claim);
        const claims = result.claims;
        const resultArray = [];
        if(claims == null){
            console.log("Empty");
            const emptyResult = "Your claim did not match any result";
            res.json({emptyResult});
        }else{
            var length;
            if(claims.length<4){
                length = claims.length;
            }else{
                length = 3;
            }
            for (let i = 0; i < length; i++) {
                const claim = claims[i];
                console.log("Claim number: "+i);
                console.log("Claim text:", claim.text);
                //console.log("Claimant:", claim.claimant);
                //console.log("Claim date:", claim.claimDate);
                const claimReviews = claim.claimReview;
                for (let j = 0; j < claimReviews.length; j++) {
                    const claimReview = claimReviews[j];
                    //console.log("Claim review source:", claimReview.publisher?.name);
                    console.log("Claim review URL:", claimReview.url);
                    //console.log("Claim review title:", claimReview.title);
                    console.log("Claim review verdict:", claimReview.textualRating);


                    const claimResult = {
                        claim: claim.text,
                        result: claimReview.textualRating,
                        url: claimReview.url
                    };

                    resultArray.push(claimResult);
                }
                console.log('-------------------------------------');
            }
            res.json({ resultArray });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = fakeNewRouter;
