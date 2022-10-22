import React from "react"
// import { FieldArrayWithId, useFieldArray } from "react-hook-form"
// import FileUploadField from "../../../../components/atoms/file-upload-field"
// import TrashIcon from "../../../../components/fundamentals/icons/trash-icon"
// import Actionables, {
//   ActionType,
// } from "../../../../components/molecules/actionables"
import InputField from "../../../../components/molecules/input"
// import { FormImage } from "../../../../types/shared"
import FormValidator from "../../../../utils/form-validator"
import { NestedForm } from "../../../../utils/nested-form"

export type ThumbnailFormType = {
  image: string | null
}

type Props = {
  form: NestedForm<ThumbnailFormType>
}

const ThumbnailForm = ({ form }: Props) => {
  const {
    // control,
    register,
    path,
    formState: { errors },
  } = form

  // const { fields, remove } = useFieldArray({
  //   control: control,
  //   name: path("image"),
  // })

  // const handleFilesChosen = (files: File[]) => {
  //   const toAppend = files.map((file) => ({
  //     url: URL.createObjectURL(file),
  //     name: file.name,
  //     size: file.size,
  //     nativeFile: file,
  //     selected: false,
  //   }))

  //   if (files.length) {
  //     replace(toAppend)
  //   } else {
  //     append(toAppend)
  //   }
  // }

  return (
    <div>
      {/* <div>
        <div className="mt-large">
          <FileUploadField
            onFileChosen={handleFilesChosen}
            placeholder="1200 x 1600 (3:4) recommended, up to 10MB each"
            filetypes={["image/gif", "image/jpeg", "image/png", "image/webp"]}
            className="py-large"
          />
        </div>
      </div> */}
      <InputField
        label="Image URL"
        placeholder="https://example.com/example.png"
        {...register(path("image"), {
          pattern: FormValidator.whiteSpaceRule("Image URL"),
        })}
        errors={errors}
      />
      {/* {fields.length > 0 && (
        <div className="mt-large">
          <h2 className="inter-large-semibold mb-small">Upload</h2>
          <div className="flex flex-col gap-y-2xsmall">
            {fields.map((field, index) => {
              return (
                <Image
                  key={field.id}
                  image={field}
                  index={index}
                  remove={remove}
                />
              )
            })}
          </div>
        </div>
      )} */}
    </div>
  )
}

// type ThumbnailProps = {
//   image: string
//   index: number
//   remove: (index: number) => void
// }

// const Image = ({ image, index, remove }: ThumbnailProps) => {
//   const actions: ActionType[] = [
//     {
//       label: "Delete",
//       onClick: () => remove(index),
//       icon: <TrashIcon size={20} />,
//       variant: "danger",
//     },
//   ]

//   return (
//     <div className="px-base py-xsmall group hover:bg-grey-5 rounded-rounded flex items-center justify-between">
//       <div className="flex items-center gap-x-large">
//         <div className="w-16 h-16 flex items-center justify-center">
//           <img
//             src={image}
//             alt={image || "Uploaded image"}
//             className="max-w-[64px] max-h-[64px] rounded-rounded"
//           />
//         </div>
//         <div className="flex flex-col inter-small-regular text-left">
//           <p>{image}</p>
//         </div>
//       </div>

//       <Actionables actions={actions} forceDropdown />
//     </div>
//   )
// }

export default ThumbnailForm
