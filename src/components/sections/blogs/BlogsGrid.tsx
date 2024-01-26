import React from 'react';
import BlogSubCard from '../../inc/BlogSubCard';
import blogs, { IBlog } from '../../../utils/mockBlogs';

const BlogsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogs.map((article: IBlog, index) => (
                <BlogSubCard
                    key={index}
                    title={article.title}
                    author={article.tags[1]}
                    date={article.date}
                    readTime={article.readTime}
                    imgUrl={article.image}
                />
            ))}
        </div>
    );
}

export default BlogsGrid;
