import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from 'modules/app.module'
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface'
import * as express from 'express'

const instance = express()
const app: Promise<INestApplication> = NestFactory.create(ApplicationModule, instance)

app
  .then(nestInstance =>
    nestInstance.listen(3000, () => {
      console.log('Application based on Express is listening on port 3000')
    })
  )
  .catch((err) => {
    console.error('Application configured to listen on port 3000 failed to start', err)
  })
