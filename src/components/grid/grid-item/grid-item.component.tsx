const GridItem = ({children, ...props}) => {
    return (
        <div className="grid-item" {...props}>
            {children}
        </div>
    );
};

export default GridItem;
