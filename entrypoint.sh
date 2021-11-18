#!/bin/sh 

mkdir -p ~/.aws

touch ~/.aws/credentials

echo "[default]
aws_access_key_id = ${tL1rRhk2ZQHsW2HZeAErlUfvxitNmolMS7NfvNHD}
aws_secret_access_key = ${AKIAROL3D3EXCINAPC4I}" > ~/.aws/credentials

aws s3 cp ${FILE} s3://${S3_BUCKET}/${FILE} \
  --region ${AWS_REGION} $*

rm -rf ~/.aws
