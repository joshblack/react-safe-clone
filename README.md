# `react-safe-clone`

> Declarative element cloning for React that doesn't overwrite props on child elements.

## Usage

```bash
# Install with yarn or npm
yarn add react-safe-clone
```

```js
import SafeClone from 'react-safe-clone';

class Interaction extends React.Component {
  handleOnClick = () => {
    // ...
  }

  render() {
    return (
      <SafeClone onClick={this.handleOnClick}>
        {this.props.children}
      </SafeClone>
    );
  }
}

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// Potential usage in a component that has a `handleOnClick` method
// defined. Here, the `onClick` defined in `Interaction` will not overwrite
// the Button's `onClick` due to `SafeClone`.
<Interaction>
  <Button onClick={handleOnClick} />
</Interaction>
```
