import Counter from "../../../Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../../../../modules/counter";

const CounterContainer = () => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());

  const onDecrease = () => dispatch(decrease());

  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
