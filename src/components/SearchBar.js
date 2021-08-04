import React from 'react';

class SearchBar extends React.Component {
    state={term:''}

    onInputChange =(e)=>this.setState({term: e.target.value});
    onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        this.props.onSearchSubmit(e.target[0].value);
    }

    render(){
        return (
            <div className="ui segment" >
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <input onChange={this.onInputChange} value={this.state.term} placeholder="Youtube Serach"/>
                        </div>
                    </form>
            </div>
        );
    }
}

export default SearchBar;