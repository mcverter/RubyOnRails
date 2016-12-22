/**
 * Created by mitchell_verter on 12/22/16.
 */


class App extends React.Component {
    render() {
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Timeline" />
                    <Content activity={activityItem} />
                    <ContentList activityList={activityItems} />
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
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

class ContentList extends React.Component {
    render() {
        const {activities}=this.props
        return (
            <div className="content">
                <div className="line"></div>

                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        )
    }
}


var mountComponent = document.querySelector("#app");
ReactDOM.render (<App />, mountComponent);
