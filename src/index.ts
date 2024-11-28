import Create from './commands/autocomplete/create.js'
import Index from './commands/autocomplete/index.js'
import Script from './commands/autocomplete/script.js'

export const commands = {
  autocomplete: Index,
  'autocomplete:create': Create,
  'autocomplete:script': Script,
}

export {default as hook} from './hooks/refresh-cache.js'
