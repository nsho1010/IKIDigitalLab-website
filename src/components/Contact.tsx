"use client";
import { useEffect, useState, useRef } from "react";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm, ContactFormState } from "@/actions/contact";
import { Send, Mail, User, MessageSquare, X } from "lucide-react";

export default function Component() {
  const initialState: ContactFormState = {
    status: "idle",
  };
  const [formState, formDispatch] = useFormState(
    submitContactForm,
    initialState,
  );
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);

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

  const renderError = (error: string[] | undefined) => {
    if (error && error.length > 0) {
      return (
        <div className="text-destructive text-sm mt-1">
          {Array.isArray(error) ? error[0] : error}
        </div>
      );
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name || name.trim() === "") {
      errors.name = "お名前を入力してください";
    }

    if (!email || email.trim() === "") {
      errors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "有効なメールアドレスを入力してください";
    }

    if (!message || message.trim() === "") {
      errors.message = "メッセージを入力してください";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowModal(true);
    }
  };

  const handleConfirmedSubmit = () => {
    setShowModal(false);
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formDispatch(formData);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
            お問い合わせ
          </h2>
          <p className="mt-4 text-sm text-gray-500 max-w-md leading-relaxed">
            ご質問や相談事があれば、気軽にお問い合わせください。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* 左側：案内テキスト */}
          <div className="lg:w-72 shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Mail className="w-4 h-4 text-cyan-600" />,
                  title: "メールで相談",
                  desc: "フォームからお気軽にどうぞ。3営業日以内に返答します。",
                },
                {
                  icon: <MessageSquare className="w-4 h-4 text-cyan-600" />,
                  title: "まず話を聞いてほしい",
                  desc: "「何から始めれば？」という段階でも大歓迎です。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-50">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：フォーム */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <form
                ref={formRef}
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="name"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                    >
                      <User className="w-3.5 h-3.5 text-cyan-600" />
                      お名前
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="名前を入力"
                      className="rounded-md border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 bg-gray-50 focus:bg-white transition-colors"
                    />
                    {validationErrors.name && (
                      <p className="text-destructive text-xs mt-0.5">
                        {validationErrors.name}
                      </p>
                    )}
                    {formState.status === "error" &&
                      renderError(formState.fieldErrors?.name)}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-600" />
                      メールアドレス
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="メールアドレスを入力"
                      type="email"
                      className="rounded-md border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 bg-gray-50 focus:bg-white transition-colors"
                    />
                    {validationErrors.email && (
                      <p className="text-destructive text-xs mt-0.5">
                        {validationErrors.email}
                      </p>
                    )}
                    {formState.status === "error" &&
                      renderError(formState.fieldErrors?.email)}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="message"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-600" />
                    メッセージ
                  </Label>
                  <Textarea
                    className="min-h-[150px] rounded-md border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 bg-gray-50 focus:bg-white transition-colors resize-none"
                    id="message"
                    name="message"
                    placeholder="メッセージを入力"
                  />
                  {validationErrors.message && (
                    <p className="text-destructive text-xs mt-0.5">
                      {validationErrors.message}
                    </p>
                  )}
                  {formState.status === "error" &&
                    renderError(formState.fieldErrors?.message)}
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    className="px-8 rounded-xl font-semibold bg-gray-950 hover:bg-gray-800 text-white transition-all duration-300"
                    type="submit"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    送信する
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 確認モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-950">送信確認</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              入力内容を送信してもよろしいですか？
            </p>
            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowModal(false)}
                className="rounded-xl px-6 border-gray-200"
              >
                キャンセル
              </Button>
              <Button
                type="button"
                onClick={handleConfirmedSubmit}
                className="rounded-xl px-6 bg-gray-950 hover:bg-gray-800 text-white"
              >
                送信する
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
