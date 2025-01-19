import { v4 as uuidv4 } from 'uuid';
import Article from './Article';
import data from '../../data/data.json'


const Articles = () => {
    return (
        <>
            {data.map((item) => (
                <section key={uuidv4()}>
                    <Article title={item.title} body={item.body} />

                </section>
            ))}
        </>
    )

}

export default Articles