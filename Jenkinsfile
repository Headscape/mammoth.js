pipeline {
  agent any
  environment {
          BRANCH_NAME="${env.GIT_BRANCH}"
          PROJECT_NAME = "${env.JOB_NAME}"
          // replace anything not alphanumeric or hyphen https://regex101.com/r/Y7nvXh/1/
          // %2F is a forward slash
          SAFE_PROJECT_NAME=sh(script: 'echo -n "${JOB_NAME}" | sed "s/[^a-zA-Z0-9-]/-/g"', returnStdout: true)
          PROJECT_URL="${SAFE_PROJECT_NAME}.hs.to"
      }
  stages {
    stage('Info') {
      steps {
        echo "Info stage"
        echo "Running ${env.JOB_NAME} #${env.BUILD_ID} on ${env.JENKINS_URL}"
        echo "for ${env.GIT_URL} "
        echo "deploying to https://$PROJECT_URL "
        echo "Branch $BRANCH_NAME - project name: $SAFE_PROJECT_NAME "
        sh 'pwd'
        // testing
        sh 'printenv'
        sh("ddev describe ")
      }
    }

    stage('Ddev config') {
      steps {
        echo "Ddev config stage"
        echo 'Check current config '
        sh("ddev describe ")
        // echo "stop any ddev containers if currently running"
        // sh("ddev describe | grep 'Project: $PROJECT_NAME'  && ddev stop --unlist $PROJECT_NAME ")
        sh("ddev config --project-name=$SAFE_PROJECT_NAME ")
        sh 'ddev config --web-environment-add="container_env=hs_staging"'
        // set URL before attempting to add hostname so we don't get hosts write errors
        //sh("sudo ddev hostname ${PROJECT_URL} 127.0.0.1 ")
        sh("ddev config --additional-hostnames=$SAFE_PROJECT_NAME ")
        sh("ddev config --additional-fqdns=$PROJECT_URL ")
      }
    }

    stage('Project specific') {
      steps {
        echo "Project specific stage"
        // ...
      }
    }

    stage('End') {
      steps {
        echo 'Finished stages of pipeline in Jenkinsfile'
      }
    }
  }
}
