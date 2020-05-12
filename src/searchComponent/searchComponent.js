import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import classes from './searchComponent.module.scss';

class SearchComponent extends Component {

    constructor({ formConfiguration }) {
        super();

        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChanged = (event) => {
        const value = event.target.value;
        let suggestions = [];
        let songs = [];

        if (value.length > 0) {

            const regex = new RegExp(`${value}`, `i`);
            this.props.songs.map(song => {
                songs.push(song.name);
            });

            suggestions = songs.sort().filter(song => regex.test(song));
        }


        this.setState({
            suggestions: suggestions,
            text: value
        });
    }

    renderSuggestions() {
        const suggestions = this.state.suggestions;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map(song => {
                    return (
                        <li key={song} onClick={() => this.suggestionSelected(song)}>
                            <div className={classes.song_img}></div>
                            <div className={classes.song_content}>
                                <div className={classes.song_title}>
                                    {song}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }

    suggestionSelected(value) {
        this.setState({
            text: value,
            suggestions: []
        })
    }

    render() {

        const text = this.state.text;
        return (
            <div className={classes.search_wrapper}>
                <div className={classes.AutoCompleteText}>
                    <input type="text" onChange={this.onTextChanged} value={text} />
                    {this.renderSuggestions()}
                </div>
                <div className={classes.search_icon}>icon</div>
            </div>
        )
    }

}

export default SearchComponent;