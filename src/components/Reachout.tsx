import {Form} from 'radix-ui'
import { Button } from './ui/Button';
import { cn } from "../utils/cn";
import { portfolioBackend, reachOut } from '../config';
import { Toast } from './ui/Toast';
import { useState } from 'react';

const URL = portfolioBackend+reachOut;

const submitForm = async (data: {[k: string]: FormDataEntryValue})=>{
    return await fetch(URL,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
}
export const Reachout = () => {
    const labelRowClasses = "flex items-baseline justify-between mb-2";
    const inputClasses = "w-full bg-background-900/50 border border-primary/20 rounded-xl px-4 py-3 text-text-100 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 placeholder:text-text-400";
    const [toast,setToast] = useState<{open: boolean,variant:'success'|'error'|'update', message: string}>({open: false, variant:'update', message: ''});
    return (
        <div className="max-w-xl mx-auto w-full p-8 bg-background-950/30 backdrop-blur-md rounded-2xl border border-primary/10 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-text-100">
                Let's <span className="text-primary">Connect</span>
            </h2>

            <Form.Root className="flex flex-col gap-6"
            onSubmit={async (e)=>{
                e.preventDefault();
                try {
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    console.log(data);
                    const res = await submitForm(data);
                    const responseData = (await res.json()).data;

                    if(responseData.success){
                        setToast({ open: true,variant:'success', message: 'Successfully sent the message' });
                    }else{
                        setToast({ open: true,variant:'error', message: 'Error occurred' });
                    }
                } catch {
                    setToast({ open: true,variant:'error', message:'Error occurred!' });
                }
                // e.preventDefault();
            }}>
                {/* Email Field */}
                <Form.Field name="email">
                    <div className={labelRowClasses}>
                        <Form.Label className="text-sm font-medium text-text-300">Email Address</Form.Label>
                        <Form.Message className="text-xs text-accent animate-pulse" match="valueMissing">
                            Email is required
                        </Form.Message>
                        <Form.Message className="text-xs text-accent animate-pulse" match="typeMismatch">
                            Invalid email format
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input 
                            className={inputClasses} 
                            type="email" 
                            placeholder="shubham@example.com"
                            required 
                        />
                    </Form.Control>
                </Form.Field>

                {/* Message/Question Field */}
                <Form.Field name="question" >
                    <div className={labelRowClasses}>
                        <Form.Label className="text-sm font-medium text-text-300">Message</Form.Label>
                        <Form.Message className="text-xs text-accent animate-pulse" match="valueMissing">
                            Please type your message
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <textarea 
                            className={cn(inputClasses, "min-h-40 resize-none")} 
                            placeholder="What's on your mind?"
                            required 
                        />
                    </Form.Control>
                </Form.Field>

                {/* Submit */}
                <Form.Submit asChild>
                    <Button variant="primary" size="lg" className="w-full mt-4">
                        Send Message
                    </Button>
                </Form.Submit>
            </Form.Root>
            <Toast
                description={toast.message}
                open={toast.open}
                variant={toast.variant}
                onOpenChange={(open) =>
                    setToast((t) => ({ ...t, open }))
                }
            />
        </div>
    );
    // could have used toast with just open and setOpen but this was a better way to do it incase in future I refer the code and future response may have meaningful response too.
};