import { useEffect } from "react";

const PostItem = (props) => {

    useEffect(() => {
        console.log(`${props.id} - Mounted`);

        return () => {
            console.log(`${props.id} - Unmount`);
        }
    }, [props.id])


    return(
        <li>{props.children}</li>
    );
};

export default PostItem;