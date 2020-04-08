import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addToCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.subtractFromCounter}  />
                <div className='line'></div>
                <button className='btn' onClick={() => this.props.storeResult(this.props.counter)}>Store Results</button>
                <ul className='results-list'>
                    {this.props.results.map( res => {
                       return ( <li key={res.id} onClick={() => this.props.deleteResult(res.id)}>{res.value}</li> )
                    })}               
                </ul>
            </div>
        );
    }
}

const mapStateToProbs = state => {
    return {
        counter: state.ctr.counter,
        results: state.res.result
    }
}

const mapDispatchToProbs = dispatch => {
    return {
        incrementCounter: () => dispatch(actionCreators.increment()),
        decrementCounter: () => dispatch(actionCreators.decrement()),
        addToCounter: () => dispatch(actionCreators.add(10)),
        subtractFromCounter: () => dispatch(actionCreators.subtract(15)),
        storeResult: (result) => dispatch(actionCreators.storeResult(result)),
        deleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProbs, mapDispatchToProbs)(Counter);