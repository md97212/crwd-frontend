#
* needs frontend tests
* needs better form validation
* uses CRWD_UNQUALIFIED cookie to block retries after qualification failure

# installing

run `yarn install`
then run `yarn start run`

# running
visit `http://localhost:3000/`

* criteria that don't meet minimums will cause user to be sent to 'unqualified' page
* when minimums are met then redirect to signup and then home page
