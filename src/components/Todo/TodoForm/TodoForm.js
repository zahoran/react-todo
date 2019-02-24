import React, {useRef} from 'react';

const todoForm = (props) => {
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.submit(inputEl.current.value);
    inputEl.current.value = '';
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className="form-group">
        <input type="text"
               required
               ref={inputEl}
               id="task"
               className="form-control"
               placeholder="What do you need to do?"/>
      </form>
    </React.Fragment>
  )
};

export default todoForm;
