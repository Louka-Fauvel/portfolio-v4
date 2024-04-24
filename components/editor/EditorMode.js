
export const EditorMode = ({data}) => {

    return (
        <>
            {data.infos.map((info) => {

                if(info.div) {
                    return (
                        <div key={info.id} className={info.className}>
                            {info.div.map((div) => {

                                if(div.h2) {
                                    return (
                                        <h2 key={div.id} className={div.className}>{div.h2}</h2>
                                    );
                                }

                            })}
                        </div>
                    );
                } else if(info.ul) {
                    return (
                        <ul key={info.id} className={info.className}>
                            {info.ul.map((ul) => {

                                if(ul.div) {
                                    return (
                                        <span  key={ul.id}>
                                            <div className={ul.className}>
                                                {ul.div.map((div) => {
                    
                                                    if(div.li) {
                                                        return (
                                                            <li key={div.id} className={div.className}>
                                                                {div.li.map((li) => {

                                                                    if(li.text) {
                                                                        return (
                                                                            <span key={li.id}>{li.text}</span>
                                                                        );
                                                                    }

                                                                })}
                                                            </li>
                                                        );
                                                    }
                    
                                                })}
                                            </div>
                                            <br/>
                                        </span>
                                    );
                                }

                            })}
                        </ul>
                    );
                }

            })}
        </>
    );
}