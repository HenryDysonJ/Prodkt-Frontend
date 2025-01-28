import { Box } from '@mui/material';
import JoditEditor from 'jodit-react';
import { ChangeEvent, useMemo, useRef } from 'react';

export interface textEditorProps {
  textValue?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>, key: string) => void;
  disabled?: boolean;
  editor?: any;
  onBlur: () => void;
}

export const TextEditor = (props: textEditorProps) => {
  const { textValue = '', handleChange, onBlur, disabled, editor } = props;

  const placeholder = 'Type your message here';
  const config = useMemo(
    () => ({
      readonly: disabled,
      placeholder: placeholder,
      // events: {
      //   afterInit: (instance: any) => {
      //     editor.current = instance;
      //   },}
    }),
    [disabled, placeholder]
  );

  return (
    <Box
      sx={{
        '.jodit-add-new-line': {
          display: 'none',
        },
        '.jodit-ui-group.jodit-ui-group_separated_true.jodit-ui-group_group_script.jodit-ui-group_size_middle, .jodit-ui-group.jodit-ui-group_separated_true.jodit-ui-group_group_media.jodit-ui-group_size_middle.jodit-ui-group:last-child, & .jodit-ui-group.jodit-ui-group_line_true.jodit-ui-group_size_middle:last-child':
        {
          display: 'none',
        },
        '.jodit-ui-group:last-child': {
          display: 'none'
        },
        ' .jodit-ui-group.jodit-ui-group_separated_true.jodit-ui-group_group_font.jodit-ui-group_before-spacer_true.jodit-ui-group_size_middle': {
          display: "none"
        },
        '.jodit-container:not(.jodit_inline)': {
          borderRadius: '8px',
        },
        '.jodit-container': {
          position: 'relative',
          minHeight: '156px !important',
          '& .jodit-wysiwyg': {
            minHeight: '100px !important',
            overflow: 'scroll',
            height: '100px',
          },
          '& p': {
            fontSize: '1.4rem',
            margin: 0,
          },
          '*': {
            boxSizing: 'border-box',
            margin: 0,
          },
        },
        '.jodit-workplace': {
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '116px !important',
          '.jodit-placeholder': {
            fontSize: '12px!important',
            fontWeight: 400,
            color: '#4E585E'
          }
        },
        '.jodit-toolbar__box': {
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderBottom: 'none',
          position: "absolute",
          bottom: 0,
          width: "100%"
        },
        '.jodit-status-bar': {
          display: 'none',
        },
        '.jodit-ui-group_line_true': { backgroundColor: '#F0F3F6' },
        '.jodit-container.jodit.jodit_theme_default.jodit-wysiwyg_mode': {
        },
      }}
    >
      <JoditEditor
        ref={editor}
        onBlur={onBlur}
        value={textValue}
        config={config}
        tabIndex={2}
        onChange={handleChange as any}
      />
    </Box>
  );
};
