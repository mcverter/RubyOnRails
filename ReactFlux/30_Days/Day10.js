/**
 * Created by mitchell_verter on 12/23/16.
 */
const element = document.querySelector('mousemove')
element.innerHTML='Move your mouse'
element.addEventListener('mousemove', function(e) {
    const {screenX, screenY} = evt;
    element.innerHTML = `<div>
    Mouse is at X: ${screenX} Y: ${screenY}
    </div>`
})

    class foo extends React.Component
{
        render() {
            return (
            <div onMouseMove={(evt) => console.log(evt)}>
                Move the mouse
            </div>
            )
        }

}


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false
        }
    }

    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    submitForm(val) {
        this.props.onSearch(val)
    }
    handleSearch(val) {

    }


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
                <SearchForm
                    searchVisible={this.state.searchVisible}
                    onSubmit={this.handleSearch.bind(this)} />
                <div
                    onClick={this.showSearch.bind(this)}
                    className="fa fa-search searchIcon"></div>
            </div>
        )
    }
 }
Header.propTypes = {
    onSearch: React.PropTypes.func
}

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    submitForm(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText)
    }
    updateSearchInput(event) {
        this.setState({
          searchText: event.target.value
        })
    }
    render() {
        let searchInputClasses=["searchInput"];
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }
        return (
                <form onSubmit={this.submitForm.bind(this)} >
                <input
                    type="text"
                    className={searchInputClasses}
                    placeholder="Search ..." />
                    onChange={this.updateSearchInput.bind(this)} />
                    </form>
        )
    }
}

SearchForm.propTypes = {
    searchVisible: React.PropTypes.bool,
    onSubmit: React.PropTypes.func.isRequired
}

SearchForm.defaultProps = {
    searchVisible: false,
    onSubmit: () => {}
}

class Panel extends React.Component {
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
                <Header
                    title="Github Activity" />

                <div className="line"></div>
                {loading&& <div>Loading</div>}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        )
    }
}
