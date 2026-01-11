"use client";

import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { Button } from "@src/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@src/components/ui/dialog";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { Textarea } from "@src/components/ui/textarea";
import { cn } from "@src/lib/utils";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type FeedbackProps = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
	text?: string;
	projectId: string;
	issueTypeId: string;
	product?: string[];
};

type formData = {
	name: string;
	email: string;
	summary: string;
	description: string;
};

const Feedback = ({
	text = "Feedback",
	projectId,
	issueTypeId,
	product,
	className,
	...rest
}: FeedbackProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [submitError, setSubmitError] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<formData>();

	const closeModal: () => void = () => {
		reset();
		setIsOpen(false);
	};

	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	const onSubmit: SubmitHandler<formData> = async (values) => {
		if (isSubmitting) return;

		try {
			const response = await fetch("/api/feedback", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					summary: values.summary,
					description: values.description,
					name: values.name,
					email: values.email,
					product: product,
					url: window.location.href,
					projectId: projectId,
					issueTypeId: issueTypeId,
				}),
			});

			if (!response.ok) {
				setSubmitError(true);
			}
		} catch (error) {
			console.error("Error submitting feedback", error);
		}
	};

	return (
		<>
			<Button
				{...rest}
				onClick={onOpen}
				variant="link"
				className={cn(className)}
			>
				{text}
			</Button>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="max-w-2xl">
					<form onSubmit={handleSubmit(onSubmit)}>
						<DialogHeader>
							<DialogTitle>Feedback or suggestions</DialogTitle>
							<DialogDescription>
								Your comments, suggestions, and feedback help us improve the
								accelerate recipes.
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-6 py-4">
							{!isSubmitSuccessful || submitError ? (
								<>
									{submitError && (
										<Alert variant="warning">
											<AlertCircle className="h-4 w-4" />
											<AlertTitle>Error</AlertTitle>
											<AlertDescription>
												Apologies, we encountered an issue with submitting the
												feedback. Please try again later.
											</AlertDescription>
										</Alert>
									)}
									<div className="space-y-4">
										<div className="space-y-2">
											<Label htmlFor="name">
												Name <span className="text-destructive">*</span>
											</Label>
											<Input
												id="name"
												{...register("name", {
													required: "Name is required",
													minLength: {
														value: 3,
														message: "Name must be at least 3 characters",
													},
												})}
												disabled={isSubmitting}
												placeholder="Your name"
												className={errors.name ? "border-destructive" : ""}
											/>
											{errors.name && (
												<p className="text-sm text-destructive">
													{errors.name.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">
												Email address{" "}
												<span className="text-destructive">*</span>
											</Label>
											<Input
												id="email"
												placeholder="Your email address"
												type="email"
												{...register("email", {
													required: "Email is required",
													pattern: {
														value:
															/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
														message: "Invalid email address",
													},
												})}
												disabled={isSubmitting}
												className={errors.email ? "border-destructive" : ""}
											/>
											{errors.email && (
												<p className="text-sm text-destructive">
													{errors.email.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<Label htmlFor="summary">
												Summary / Title{" "}
												<span className="text-destructive">*</span>
											</Label>
											<Input
												id="summary"
												placeholder="Please provide an abstract of the feedback"
												{...register("summary", {
													required: "Please provide a summary",
													minLength: {
														value: 3,
														message: "Summary must be at least 3 characters",
													},
												})}
												disabled={isSubmitting}
												className={errors.summary ? "border-destructive" : ""}
											/>
											{errors.summary && (
												<p className="text-sm text-destructive">
													{errors.summary.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<Label htmlFor="details">
												More details <span className="text-destructive">*</span>
											</Label>
											<Textarea
												id="details"
												rows={8}
												placeholder="More details that you would like to share"
												{...register("description", {
													required: "Description is required",
													minLength: {
														value: 3,
														message:
															"Description must be at least 3 characters",
													},
												})}
												disabled={isSubmitting}
												className={
													errors.description ? "border-destructive" : ""
												}
											/>
											{errors.description && (
												<p className="text-sm text-destructive">
													{errors.description.message}
												</p>
											)}
										</div>
									</div>
								</>
							) : (
								<div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
									<p className="font-bold text-lg">
										Thank you for your feedback!
									</p>
									<p>Your feedback has been submitted successfully.</p>
									<Button onClick={closeModal}>Close</Button>
								</div>
							)}
						</div>
						{(!isSubmitSuccessful || submitError) && (
							<DialogFooter>
								<Button onClick={onClose} variant="outline" type="button">
									Close
								</Button>
								<Button type="submit" disabled={isSubmitting}>
									{isSubmitting ? "Submitting..." : "Submit"}
								</Button>
							</DialogFooter>
						)}
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Feedback;
