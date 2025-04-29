"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm, ContactFormState } from "@/actions/contact";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Component() {
  const initialState: ContactFormState = {
    status: "idle",
  };
  const [formState, formDispatch] = useFormState(
    submitContactForm,
    initialState
  );
  const { toast } = useToast();

  useEffect(() => {
    if (formState.status === "success") {
      toast({
        title: "送信に成功しました",
        description:
          "お問い合わせありがとうございました。3営業日以内に返答いたします。",
      });
    }
    if (formState.status === "error") {
      toast({
        title: "送信に失敗しました",
        description: "入力内容を確認して下さい",
        variant: "destructive",
      });
    }
  }, [formState, toast]);

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="relative inline-block text-4xl font-bold tracking-tight">
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0"></span>
          </h2>
          <p className="mt-2 md:text-xl text-muted-foreground">お問い合わせ</p>
          <p className="mt-4 text-muted-foreground">
            ご質問や相談事があれば、気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-6" action={formDispatch} noValidate>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="flex items-center gap-2 font-medium"
                >
                  <User className="w-4 h-4 text-cyan-600" />
                  お名前
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="名前を入力"
                  className="border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                />
                {formState.status === "error" && formState.fieldErrors.name && (
                  <div className="text-destructive text-sm mt-1">
                    {formState.fieldErrors.name}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="flex items-center gap-2 font-medium"
                >
                  <Mail className="w-4 h-4 text-cyan-600" />
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="メールアドレスを入力"
                  type="email"
                  className="border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                />
                {formState.status === "error" &&
                  formState.fieldErrors.email && (
                    <div className="text-destructive text-sm mt-1">
                      {formState.fieldErrors.email}
                    </div>
                  )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="flex items-center gap-2 font-medium"
              >
                <MessageSquare className="w-4 h-4 text-cyan-600" />
                メッセージ
              </Label>
              <Textarea
                className="min-h-[150px] border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                id="message"
                name="message"
                placeholder="メッセージを入力"
              />
              {formState.status === "error" &&
                formState.fieldErrors.message && (
                  <div className="text-destructive text-sm mt-1">
                    {formState.fieldErrors.message}
                  </div>
                )}
            </div>

            <div className="flex justify-center pt-4">
              <Button
                className="px-8 py-3 font-medium bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
                type="submit"
              >
                <Send className="w-4 h-4 mr-2" />
                送信する
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
