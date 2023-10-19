import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import React, { useCallback } from 'react';
import Link from '@tiptap/extension-link';
import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaLink,
  FaImage,
} from 'react-icons/fa';

const Tiptap = ({ setDescription, handelPost }) => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: () => {
          return 'Add a description or link (optional)';
        },
      }),
      TextStyle.configure({ types: [ListItem.name] }),
      Link.configure({ types: [ListItem.name] }),
      Underline.configure({ types: [ListItem.name] }),

      Image,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="block">
        <EditorContent
          editor={editor}
          className="bg-white rounded-lg placeholder:text-primary-text"
        />
      </div>

      <div className="flex justify-between mt-[1rem] scale-95 -ml-4 mobile-lg:scale-100 mobile-lg:ml-0 items-center ">
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1 bg-brown px-2 rounded-lg">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={
                editor.isActive('bold')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : ' py-1 px-2 rounded-lg '
              }>
              <FaBold className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={
                editor.isActive('italic')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : ' py-1 px-2 rounded-lg '
              }>
              <FaItalic className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={
                editor.isActive('underline')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : ' py-1 px-2 rounded-lg '
              }>
              <FaUnderline className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={
                editor.isActive('bulletList')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : ' py-1 px-2 rounded-lg '
              }>
              <FaListUl className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={
                editor.isActive('orderedList')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : 'py-1 px-2 rounded-lg '
              }>
              <FaListOl className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={setLink}
              className={
                editor.isActive('link')
                  ? 'bg-white/10 py-1 px-2 rounded-lg'
                  : ' py-1 px-2 rounded-lg '
              }>
              <FaLink className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="mt-[2px]">
            <button
              onClick={addImage}
              className={
                editor.isActive('image')
                  ? 'bg-white/10 py-1 px-3 rounded-lg'
                  : ' py-1 px-3 rounded-lg bg-brown'
              }>
              <FaImage className="w-5 h-4 text-white " />
            </button>
          </div>
        </div>
        <button
          onClick={() => handelPost()}
          className="py-[10px] hidden lg:block w-fit  px-14 text-[0.875rem] rounded font-semibold bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
          Post
        </button>
      </div>
    </div>
  );
};

export default Tiptap;
