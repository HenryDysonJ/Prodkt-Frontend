import { Box, Typography } from "@mui/material"
import { categoriesStyle } from "../style"
import { CategoryStateInterface } from "@core/store/interface"
import { QuestionCard } from "@core/ui/components"
import { CheckBoxProps } from "@core/ui/components/questionCard"

interface coverageDetailsInterface {
  addProductState: CategoryStateInterface
  handleChange: (key: string, value: any) => void
}

export const CoverageDetails = (props: coverageDetailsInterface) => {
  const { addProductState, handleChange } = props
  const giveMeRadioButtons = (
    key: 'extended_warranty' | 'insurance' | 'amc',
    isChecked: boolean | null,
  ): CheckBoxProps[] => [
      {
        label: 'Yes',
        onChange: (value: boolean) => {
          handleChange(key, (true) as never)
        },
        checked: addProductState[key] ? true : false,
      },
      {
        label: 'No',
        onChange: (value: boolean) => {
          handleChange(key, (false) as never)
        },
        checked: !addProductState[key] ? true : false,

      },
    ];
  return (
    <Box>
      <Typography my={1} sx={categoriesStyle?.addedfieldSx}>Coverage Details</Typography>
      <QuestionCard
        cardStyle={categoriesStyle?.questionCard}
        titleStyle={categoriesStyle?.question}
        mapId={'1'}
        testidCheck="yes1"
        title="Applicable for extended warranty?"
        radioButtons={giveMeRadioButtons('extended_warranty', addProductState?.extended_warranty)}
      />
      <QuestionCard
        cardStyle={categoriesStyle?.questionCard}
        titleStyle={categoriesStyle?.question}
        mapId={'2'}
        testidCheck="ExtendedInsurace"
        title="Applicable for extended insurance?"
        radioButtons={giveMeRadioButtons('insurance', addProductState?.insurance)}
      />
      <QuestionCard
        cardStyle={categoriesStyle?.questionCard}
        titleStyle={categoriesStyle?.question}
        mapId={'3'}
        testidCheck="ExtendedAMC"
        title="Applicable for AMC?"
        radioButtons={giveMeRadioButtons('amc', addProductState?.amc)}
      />
    </Box>
  )
}