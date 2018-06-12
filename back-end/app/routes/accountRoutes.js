const express = require('express');
const router = express.Router();
const accountModel = require('../login-models/accountModel');

router.route('/account')
    .post((request, res) => {
        console.log(request.body);
        const new_account = new accountModel(request.body);
        new_account.save((err, account) => {
            if (err) {
                return res.send(err);
            }
            return res.send(account);
        });
    })
    .get((request, response) => {
        accountModel.find({}, {}, (err, accounts) => {
			if (err) {
				return response.send(err);
			}
			response.json(accounts);
		});
    })

module.exports = router;