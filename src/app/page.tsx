import Link from 'next/link';
import { BLOGIFY_POINTS, CREDIT_POINTS, IContent } from './constant';
import classes from './page.module.scss';

const ContentBuilder = ({ data }: { data: IContent[] }) => {
    return (
        <>
            {data.map((data) => (
                <>
                    <div
                        key={`divider-${data.id}`}
                        className={classes.home__divider}
                    />
                    <div key={`container-${data.id}`}>
                        <h6 className={classes['home--heading']}>
                            {data.heading}
                        </h6>
                        {data?.content && (
                            <p className={classes['home--content']}>
                                {data.content}
                            </p>
                        )}
                        {data?.image && (
                            <img
                                className={classes['home__image']}
                                src={data.image}
                                alt={data.alt}
                            />
                        )}
                        {data?.points && (
                            <ul>
                                {data.points.map((point) => (
                                    <>
                                        <li key={`list-point${point.id}`}>
                                            <p
                                                className={
                                                    classes['home--content']
                                                }
                                            >
                                                <span>{point.title}:</span>{' '}
                                                {point.content}
                                            </p>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        )}
                    </div>
                </>
            ))}
        </>
    );
};

export default function Home() {
    return (
        <section className={classes.home}>
            <main className="card mb-2">
                <div className="card__header">
                    <h4 className="card__header--heading">
                        Welcome to Simply Blogify
                    </h4>
                    <p className="card__header--caption">
                        Where Your Words Matter!
                    </p>
                </div>
                <ContentBuilder data={BLOGIFY_POINTS} />
                <p className={classes['home--content']}>
                    Ready to embark on your blogging journey? Sign up today and
                    become a part of the Simply Blogify family. Your story
                    begins here!
                </p>
                <Link href="/signin" className="link">
                    📝 Sign Up Now 🚀
                </Link>
            </main>
            <main className="card">
                <div className="card__header">
                    <p className="card__header--caption">--Credits</p>
                    <h4 className="card__header--heading">
                        Meet Our Visionary Developer: Rakshit Agrawal
                    </h4>
                </div>
                <ContentBuilder data={CREDIT_POINTS} />
                <p className={classes['home--content']}>
                    Thank you, Rakshit, for making Simply Blogify more than just
                    a website – you've made it a home for storytellers.
                </p>
                <p className="primary-color">
                    ✨ Explore Simply Blogify Today! 🚀
                </p>
            </main>
        </section>
    );
}
