import React from 'react';
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import SearchBar from "../../components/search/searchBar";
import GenericMessage from "../../components/messages/genericMessage";

function Search(props) {
    const {SearchResults} = props;
    const hasResults = SearchResults && SearchResults.length === 0;
    return (
        <section>
            <Breadcrumb/>
            <section className="py-6">
                <div className="container">
                    {
                        true &&
                        <div>
                            <GenericMessage message={{
                                title: "Sorry!",
                                body: "We apologize but your search yielded no results!" +
                                    "Please try a different term.",
                                returnUrl: '/blog',
                                action: 'Back to Blog'
                            }}
                            />
                        </div>

                    }
                </div>
            </section>
        </section>
    );
}

export default Search;
