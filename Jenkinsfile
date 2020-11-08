pipeline {
  agent any
  stages {
    stage("Build and Deploy") {
      steps {
        sh "npm install"
        sh "npm run build"
      }
    }
  }
}