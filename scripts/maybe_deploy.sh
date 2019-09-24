# get first 8 characters of commit message (to compate with '[review]' string)
COMMIT_MESSAGE=$(git log -n 1 --pretty=format:%s $CIRCLE_SHA1 | cut -c1-8)

if [ $CIRCLE_BRANCH = "master" ]; then
  # deploy to staging
  HEROKU_APP='cumpa2-0-staging' yarn heroku-deploy
  API='https://cumpa2-0-staging.herokuapp.com' FIREBASE_ENV='staging' yarn firebase-deploy
  exit 0
elif [ $COMMIT_MESSAGE = "[review]" ]; then
  # deploy to review
  # HEROKU_APP='cumpa2-0-review' yarn heroku-deploy
  API='https://cumpa2-0-review.herokuapp.com' FIREBASE_ENV='review' yarn firebase-deploy
fi
