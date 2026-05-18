'use client'

import { Button } from "@heroui/react"
import { Sparkles } from "lucide-react"

const AddIdea = () => {


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const data = Object.fromEntries(formData.entries())


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData=await res.json();
    }

    return (
        <div className="container mx-auto mt-6 max-w-4xl px-4">
            <div className="mb-8">
                <p className="flex items-center my-4 gap-2.5 gradient-text">
                        <Sparkles color="blue"/> New Idea 
                    </p>
                <h1 className="text-3xl font-bold">Drop your concept
</h1>

                <p className="text-gray-500 mt-2">
                    Share your startup or project concept with the community.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid gap-5 bg-white  rounded-2xl  border md:p-10 p-7  shadow-xl"
            >
                {/* Project Title */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="project_title" className="font-medium">
                        Idea Title *
                    </label>

                    <input
                        id="project_title"
                        name="project_title"
                        type="text"
                        required
                        placeholder="e.g. MindMesh — AI Study Buddy for ADHD Learners"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Tagline */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="tagline" className="font-medium">
                        Short Description *
                    </label>

                    <input
                        id="tagline"
                        name="tagline"
                        type="text"
                        required
                        placeholder="One sentence that hooks the reader."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Full Pitch */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="the_full_pitch" className="font-medium">
                        Detailed Description *
                    </label>

                    <textarea
                        id="the_full_pitch"
                        name="the_full_pitch"
                        rows={5}
                        required
                        placeholder="Tell us the full story — context, mechanics, why now."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Category + Tags */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="font-medium">
                            Category *
                        </label>

                        <select
                            id="category"
                            name="category"
                            required
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select category</option>
                            <option value="AI">AI</option>
                            <option value="SaaS">SaaS</option>
                            <option value="EdTech">EdTech</option>
                            <option value="FinTech">FinTech</option>
                            <option value="Health">Health</option>
                            <option value="Marketplace">Marketplace</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="tags" className="font-medium">
                            Tags
                        </label>

                        <input
                            id="tags"
                            name="tags"
                            type="text"
                            placeholder="AI, climate, marketplace"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Image */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="image" className="font-medium">
                        Image URL *
                    </label>

                    <input
                        id="image"
                        name="image"
                        type="url"
                        required
                        placeholder="https://..."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Budget + Target */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="font-medium">
                            Estimated Budget
                        </label>

                        <input
                            id="budget"
                            name="budget"
                            type="text"
                            placeholder="$80k seed"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="target" className="font-medium">
                            Target Audience *
                        </label>

                        <input
                            id="target"
                            name="target"
                            type="text"
                            required
                            placeholder="University students, remote teams..."
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Problem Statement */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="the_problem" className="font-medium">
                        Problem Statement *
                    </label>

                    <textarea
                        id="the_problem"
                        name="the_problem"
                        rows={3}
                        required
                        placeholder="What's broken today?"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Proposed Solution */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="the_proposed_solution" className="font-medium">
                        Proposed Solution *
                    </label>

                    <textarea
                        id="the_proposed_solution"
                        name="the_proposed_solution"
                        rows={3}
                        required
                        placeholder="How will you fix it?"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <Button variant="outline"
                        type="submit"
                        className="rounded-xl gradient-button py-6 text-white px-6 py-3 font-medium hover:bg-blue-700 transition"
                    >
                        Publish Idea
                    </Button>

                    <button
                        type="button"
                        className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddIdea