# webtask-fetchtemp

###Pre-requisites
wt cli is installed (https://webtask.io/cli)

###Clone repository
`git clone https://github.com/zuphu/webtask-fetchtemp.git`

###Create a new webtask
`wt create webtask-fetchtemp.js`

###Usage
**Required Parameter**
city=[city name]

Examples:
- https://webtask.it.auth0.com/api/run/wt-anthony_guev-gmail_com-0/webtask-fetchtemp?webtask_no_cache=1&city=ottawa
- `curl "https://webtask.it.auth0.com/api/run/wt-anthony_guev-gmail_com-0/webtask-fetchtemp?webtask_no_cache=1&city=berlin"`

**Optional Parameter**
units=[metric|imperial|kelvin]

Examples:
- https://webtask.it.auth0.com/api/run/wt-anthony_guev-gmail_com-0/webtask-fetchtemp?webtask_no_cache=1&city=ottawa&units=metric
- `curl "https://webtask.it.auth0.com/api/run/wt-anthony_guev-gmail_com-0/webtask-fetchtemp?webtask_no_cache=1&city=denver&units=imperial"`
