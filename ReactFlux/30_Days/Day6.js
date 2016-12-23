/**
 * Created by mitchell on 12/22/2016.
 */
class Clock extends React.component {
  constructor(props) {
    super(props);
    const currentTime = new Date()
    this.state = {
      hours : currentTime.getHours(),
      minutes : currentTime.getMinutes(),
      seconds : currentTime.getSeconds(),
      ampm : currentTime.getHours() >= 12? 'pm' : 'am'
    }
    this.setTimer();
  }
  setTimer() {
    this.updateClock.bind(this);
  }
  updateClock() {
    const currentTime = new Date()
    this.setState ({
      hours : currentTime.getHours(),
      minutes : currentTime.getMinutes(),
      seconds : currentTime.getSeconds(),
      ampm : currentTime.getHours() >= 12? 'pm' : 'am'
    },this.setTimer());
  }

  render() {
    const {hours,minutes,
      seconds,ampm} = this.state

    return (
      <div className="clock">
        {
          hours == 0 ? 12 :
            (hours > 12) ?
              hours -12 : hours
        } : {
      minutes > 9 ? minutes: `0${minutes}`
      } : {
        minutes > 9 ? minutes: `0${minutes}`
      } {ampm}
    </div>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVisible: false
    }
  }


  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render(){
    let searchInputClasses = ["searchInput"];

    if (this.state.searchVisible) {
      searchInputClasses.push["active"]
    }

    return (
      <div className="header">
          <div class="fa fa-more"></div>
        <span className="title">
          {this.props.title}
        </span>
  <input
    type="text"
    className={searchInputClasses.join(' ')}
    placeholder="Search ..." />
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}