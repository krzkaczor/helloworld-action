import * as core from '@actions/core'
import {wait} from './wait'

import gh from "@actions/github"

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`)

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())

    core.debug(JSON.stringify(gh.context))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
