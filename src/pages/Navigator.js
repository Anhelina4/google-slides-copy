import { PresentationShow, PresentationsAll } from '../pages/App'
import { Route, Switch } from 'react-router-dom'

const Navigator = () => (
  <Switch>
    <Route path="/" exact component={PresentationsAll} />
    <Route path="/presentation/:id" component={PresentationShow} />
  </Switch>
)

export default Navigator
