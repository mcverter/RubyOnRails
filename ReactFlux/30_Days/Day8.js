/**
 * Created by mitchell_verter on 12/22/16.
 */


class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {refreshing: false}
    }

    refresh() {
        this.setState({refreshing: true})
    }

    onComponentRefresh(){
        this.setState({refreshing: false})
    }

    render() {
        const {refreshing} = this.state;
        return (
            <Panel>
                <Header title="Github activity"/>
                <Content
                    onComponentRefresh={
                        this.onComponentRefresh.bind(this)}
                    requestRefresh={refreshing}
                    fetchData={fetchEvents}/>
                <Footer>
                    <button onClick={this.refresh.bind(this)}>
                        Refresh
                    </button>
                </Footer>

            </Panel>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Timeline" />
                    <ContentSingle activity={activityItem} />
                    <Content activityList={activityItems} />
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        let searchInputClasses=["searchInput"];
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }
        return (
            <div style={{backgroundColor: 'rgba(251,202,43,1'}} className="header">
                <div className="fa fa-more"></div>
                <span className="title">
                    {this.props.title}
                </span>
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search ..." />
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

var activityItem = {
    timestamp : new Date().getTime(),
    text: "Ate lunch",
    user: {
        id: 1,
        name: 'Nate',
        avatar: "foo.jpg"
    },
    comments: [
        {from: 'Air', text: 'yah'}
    ]
};

const activityItems = [
    {
        timestamp : new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: "foo.jpg"
        },
        comments: [
            {from: 'Air', text: 'yah'}
        ]
    },
    {
        timestamp : new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: "foo.jpg"
        },
        comments: [
            {from: 'Air', text: 'yah'}
        ]
    },
    {
        timestamp : new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: "foo.jpg"
        },
        comments: [
            {from: 'Air', text: 'yah'}
        ]
    }
]

class ActivityItem extends React.Component {
    render() {
        const {activity}=this.props
        return (
            <div className="content">
                <div className="line"></div>
                <div className="item">
                    <div className="avatar">
                        <img src={activity.user.avatar} />
                        {activity.user.name}
                    </div>

                    <span className="time">
                        {activity.timestamp}
                    </span>
                    <p> {activity.text} </p>
                    <div className="commentCount">
                        {activity.comments.length}
                    </div>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            activities: []
        }
    }

    componentWillMount() {
        this.setState({activities: data})
    }
    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({loading: true}, this.updateData)
        }
    }

    updateData() {
        this.setState({
                loading:false,
                activities: data},
            this.props.onComponentRefresh)
    }
    render() {
        const {loading, activities}=this.state
        return (
            <div className="content">
                <div className="line"></div>
                {loading&& <div>Loading</div>}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        )
    }
}


var mountComponent = document.querySelector("#app");
ReactDOM.render (<App />, mountComponent);
class Clock extends React.component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }
    componentDidMount() {
        this.setTimer()
    }
    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
    setTimer() {
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }
    getTime() {
        const currentTime = new Date()
        return{
            hours : currentTime.getHours(),
            minutes : currentTime.getMinutes(),
            seconds : currentTime.getSeconds(),
            ampm : currentTime.getHours() >= 12? 'pm' : 'am'
        }
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

Clock.propTypes = {
    title: React.PropTypes.string,
    count: React.PropTypes.number,
    isOn: React.PropTypes.bool,
    onDisplay: React.PropTypes.func,
    symbol: React.PropTypes.symbol,
    user: React.PropTypes.object,

    name: React.PropTypes.node,

    counts: React.PropTypes.array,
    users: React.PropTypes.arrayOf(React.PropTypes.object),
    alarmColor: React.PropTypes.oneOf(['red', 'blue']),
    description: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.instanceOf(Title)
    ]),
    basicObject: React.PropTypes.object,
    numbers: React.PropTypes.objectOf(React.PropTypes.numbers),
    messages: React.PropTypes.instanceOf(Message),
    contactList: React.PropTypes.shape({
        name: React.PropTypes.string,
        phone: React.PropTypes.string
    }),
    displayElement: React.PropTypes.element.isRequired


}

Header.propTypes = {
    title: React.PropTypes.string
}

