import React from "react";
import { ContentComponent, CloudinaryImage, ContentType, getCSS, IconTextComponent, Text, Textarea, Select, RadioGroup, CheckboxGroup } from "./";


interface FormFloatingProps {
  name: string;
  containerClass: string;
  containerContentClass: string;
  containerContentArray: string;
  wrapperClass: string;
  wrapperContentClass: string;
  wrapperContentArray: string;
  inputClass: string;
  labelClass: string;
  labelOnInputClass: string;
  labelOffInputClass: string;
  formClass: string;
  formArray: string;
  buttonClass: string;
  buttonText: string;
  img: string;
  imageClass: string;
};




/**
 * FormFloating Component
 *
 * @param {FormFloatingProps} props - The props for the component.
 */

const FormFloating: React.FC<FormFloatingProps> = (props) => {
  const { name, containerContentArray, wrapperContentArray, formArray, buttonText, img, ...otherCSS } = props;

  const { cssString, css } = getCSS(otherCSS);

  const { array: formElements } = JSON.parse(formArray as any);
  const { array: containerContent } = JSON.parse(containerContentArray as any);
  const { array: wrapperContent } = JSON.parse(wrapperContentArray as any);

  return (
    <div className={css["containerClass"]}>
      {img && (
        <div className="absolute w-full h-full z-[1]">
          <CloudinaryImage publicId={img} className={css["imageClass"]} />
        </div>
      )}
      {containerContent.length > 0 && (
        <div className={css["containerContentClass"]}>
          {containerContent.map((contentAttr: ContentType, i: number) => {
            return <ContentComponent {...contentAttr} />;
          })}
        </div>
      )}
      <style type="text/css" dangerouslySetInnerHTML={{ __html: cssString || "" }} />
      <div className={css["wrapperClass"]}>
        {wrapperContent.length > 0 && (
          <div className={css["wrapperContentClass"]}>
            {wrapperContent.map((contentAttr: ContentType, i: number) => {
              const { type } = contentAttr;

              return type === "content" ? <ContentComponent {...contentAttr} /> : <IconTextComponent {...contentAttr} />;
            })}
          </div>
        )}
        <form className={css["formClass"]} data-netlify="true" method="POST" name={name || "default"}>
          <input type="hidden" name="form-name" value={name || "default"} />

          {formElements.map((obj: any, i: number) => {
            switch (obj.type) {
              case "content":
                return <ContentComponent {...obj} />;
              case "text":
                return (
                  <Text
                    key={i}
                    {...obj}
                    inputClassName={css["inputClass"]}
                    labelClassName={css["labelClass"]}
                    labelOnInputClass={css["labelOnInputClass"]}
                    labelOffInputClass={css["labelOffInputClass"]}
                  />
                );
              case "textarea":
                return (
                  <Textarea
                    key={i}
                    {...obj}
                    inputClassName={css["inputClass"]}
                    labelClassName={css["labelClass"]}
                    labelOnInputClass={css["labelOnInputClass"]}
                    labelOffInputClass={css["labelOffInputClass"]}
                  />
                );
              case "select":
                return <Select key={i} {...obj} inputClassName={css["inputClass"]} labelClassName={css["labelClass"]} />;
              case "radio":
                return <RadioGroup key={i} {...obj} labelClassName={css["labelClass"]} />;
              case "checkbox":
                return <CheckboxGroup key={i} {...obj} labelClassName={css["labelClass"]} />;
            }
          })}
          <button className={css["buttonClass"]}>{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default FormFloating;