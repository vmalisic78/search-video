import React, { Component } from 'react'

export default class SearchVideo extends Component {
    state = {
        search: ''
    }

    handleInput = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.SearchVideo(this.state.search)
        this.setState({
            search: ''
        })
    }


  render() {
    return (
      <div className="container-fluid">
          <form className="form-inline my-3" onSubmit={this.handleSubmit}>
              <div className="form-group w-75 mx-auto">
                    <label htmlFor="search" className="mr-2">Search Video</label>
                    <input 
                        type="search"
                        name="search"
                        value={this.state.search}
                        className="form-control w-50"
                        placeholder="Search Video..."
                        onChange={this.handleInput}
                    />
                    <button className="btn btn-success btn-sm ml-1 py-2">Search Video</button>
              </div>
          </form>
      </div>
    )
  }
}
