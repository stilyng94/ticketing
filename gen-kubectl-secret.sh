#!/bin/bash
#Generate kubectl secrets and list them

echo 'Following are keys you need to set'

echo 'env names => JWT_KEY ,STRIPE_SECRET'
echo 'secret names =>  jwt-secret, stripe-secret'


echo 'Enter JWT secret name'
read  secretName1

echo 'Enter JWT ENV name'
read  envName1

echo 'Enter JWT value'
read  envValue1

echo 'Enter STRIPE secret name'
read  secretName2

echo 'Enter STRIPE ENV name'
read  envName2

echo 'Enter STRIPE value'
read  envValue3


kubectl create secret generic $secretName1--from-literal $envName1=$envValue1
kubectl create secret generic $secretName3 --from-literal $envName2=$envValue2

echo "Success"

kubectl get secrets
