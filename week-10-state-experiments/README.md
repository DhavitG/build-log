# Context API

- Context: This is created using React.createContext(). It serves as a container for the data you want ot share.
- Provider: This component wraps a part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
- Consumer: This component subscribes to context changes. It allows you to access the context value (using useContext hook)
