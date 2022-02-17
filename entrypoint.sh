#!/bin/sh 

set -e

# if [ -z "$S3_BUCKET" ]; then
#   echo "S3_BUCKET is not set. Quitting."
#   exit 1
# fi
# if [ -z "$AWS_ACCESS_KEY_ID" ]; then
#   echo "AWS_ACCESS_KEY_ID is not set. Quitting."
#   exit 1
# fi
# if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
#   echo "AWS_SECRET_ACCESS_KEY is not set. Quitting."
#   exit 1
# fi

# if [-z "$FILE"]; then
#   echo "FILE is not set. Quitting"
#   exit 1
# fi

# if [ -z "$AWS_REGION"]; then
#   AWS_REGION="us-east-1"
# fi

#	mkdir -p ~/.aws
#	touch ~/.aws/credentials
#	echo "[default]
#	#aws_secret_cloudfront_distributtion_id = ${AWS_SECRET_CLOUDFRONT_DISTRIBUTION_ID}
#	aws_access_key_id = ${AWS_ACCESS_KEY_ID}
#	aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}" > ~/.aws/credentials
#	aws s3 cp ${FILE_QA} s3://${S3_BUCKET_QA}/${FILE_QA} --recursive 
#	aws s3 cp ${FILE_PROD} s3://${S3_BUCKET_PROD}/${FILE_PROD} --recursive
#	rm -rf ~/.aws

