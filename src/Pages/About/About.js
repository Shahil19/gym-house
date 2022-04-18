import React from 'react';

const About = () => {
    const img = 'https://scontent.fdac10-1.fna.fbcdn.net/v/t39.30808-6/274260145_1015997738992707_1752632143408131921_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFlKbdBgwSUqi9dn89VR6CO9-njviu0kZT36eO-K7SRlHrZrX_n8iSnZArwSXsIqwHEirBBBFFxXXLINUCfF67D&_nc_ohc=xOvo3hDr0oEAX_ywYTB&tn=FhmwEpDwBILQhNxQ&_nc_zt=23&_nc_ht=scontent.fdac10-1.fna&oh=00_AT_m9abkmQ7KfutG4myRCVxS44eBCsKa2FzSblulSFQZ7g&oe=62630A5F';
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center my-10'>About Me</h2>
            <div className='w-4/5 lg:w-3/4 mx-auto'>
                <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={img} alt='' />
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold font-mono">SHAHIL</h2><span className='font-semibold my-1 '>Junior Web Developer</span>
                        <p className="mt-2 text-gray-800 text-xl my-3">I'm looking to set some long term goals now. I realised I'm being sidetracked by all the different technologies coming out and I really want to settle down and focus on one thing. I believe setting a definite goal will help me achieve that. I know goals are personal and unique, but I'm sure I can get some inspiration from someone.</p>
                        <p className="mt-2 text-gray-800 text-xl">To achieve my goal I Track Progress. It requires steady attention to our actions and determination for wanting to achieve something big. In order to achieve your goal in life, you need to deeply desire the goal that you want. Weak desires bring weak results. You need to have the strong desire to achieve the goal. You have to decide what you want. Start to think about what these goals means to you. Take time to think why you are setting the goal you have chosen. Make sure that you really want the goal you are setting to avoid…show more content…
                            Name everything from who is involved to what, where, when and why you want to accomplish the goal. Your goal must be clear and well defined. Generalized goals are unhelpful because they don’t provide sufficient direction. Remember, you need the goals to show you the way.</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-xl font-medium text-indigo-500">Rock On &#128512;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; <h2>About Me</h2>