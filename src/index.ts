import Index from './commands/autocomplete'
import Create from './commands/autocomplete/create'
import Script from './commands/autocomplete/script'

export const commands = {
  autocomplete: Index,
  'autocomplete:create': Create,
  'autocomplete:script': Script,
}

export {default as hook} from './hooks/refresh-cache'
