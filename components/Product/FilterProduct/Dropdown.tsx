// Libs
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useCheckboxGroup,
  VStack,
} from '@chakra-ui/react'
import React, { Fragment, memo, useState } from 'react'

// Components
import ArrowBottom from '@components/Icons/ArrowBottom'
import ArrowRight from '@components/Icons/ArrowRight'
import CheckBox from '@components/Common/CheckBox'
import ButtonLink from '@components/Common/ButtonLink'

type TOption = {
  id: string
  label: string
  value: string | number
}

type TDropdown = {
  id: string
  label: string
  value: string | number
}

type TNestedItems = {
  id: string
  label: string
  value: TOption[][]
}

interface IProps {
  name: string
  items?: TDropdown[]
  type: 'checkBox' | 'button' | 'input'
  nestedItems?: TNestedItems[]
  level?: '1' | '2'
  search: string | undefined
  selectedCategory?: string[]
}

const Dropdown = memo(
  ({ name, items, type, nestedItems, level = '1', search, selectedCategory }: IProps) => {
    const [open, setOpen] = useState(false)

    // TODO: add value to get data from check box
    const { getCheckboxProps } = useCheckboxGroup({
      defaultValue: [],
    })

    const handleOpen = () => {
      setOpen(!open)
    }

    // console.log(value.sort().join(' and '))

    const renderButton = () =>
      level === '1' ? (
        <Button
          variant='ghost'
          justifyContent='space-between'
          height='fit-content'
          style={{
            paddingInline: 0,
          }}
          fontSize={['16px', '18px']}
          rightIcon={
            open ? (
              <ArrowBottom width='13px' height='8px' viewBox='0 0 13 8' fill='#29293E' />
            ) : (
              <ArrowRight width='8px' height='13px' viewBox='0 0 8 13' fill='#29293E' />
            )
          }
          onClick={handleOpen}
        >
          {name.toLowerCase()}
        </Button>
      ) : (
        <Button
          w='full'
          variant='ghost'
          fontWeight='Regular'
          justifyContent='start'
          height='fit-content'
          style={{
            paddingInline: 0,
          }}
          fontSize={['16px', '18px']}
          leftIcon={
            open ? (
              <ArrowBottom
                style={{ marginRight: '8px' }}
                width='13px'
                height='8px'
                viewBox='0 0 13 8'
                fill='#29293E'
              />
            ) : (
              <ArrowRight
                style={{ marginRight: '13px' }}
                width='8px'
                height='13px'
                viewBox='0 0 8 13'
                fill='#29293E'
              />
            )
          }
          onClick={handleOpen}
        >
          {name.toLowerCase()}
        </Button>
      )

    return (
      <VStack style={{ margin: 0 }} w='full' pt='15px'>
        {renderButton()}

        <VStack style={{ margin: 0 }} w='full' display={open ? 'flex' : 'none'}>
          {type === 'checkBox' &&
            items &&
            items.map((item) => (
              <Fragment key={item.id}>
                <CheckBox {...getCheckboxProps({ name: item.label, value: item.value })} />
              </Fragment>
            ))}
          {type === 'button' &&
            items &&
            items.map((item) => (
              <Fragment key={item.id}>
                <ButtonLink
                  name={item.value}
                  href={{
                    pathname: '/product',
                    query: {
                      ...(search && { search }),
                      ...(item.value !== 'All' && { category: item.value }),
                    },
                  }}
                  active={selectedCategory?.includes(item.value.toString())}
                />
              </Fragment>
            ))}
          {type === 'input' && items && (
            <form style={{ marginTop: 0, width: '100%' }}>
              {items.map((item) => (
                <Fragment key={item.id}>
                  <FormControl style={{ margin: 0 }} pt='10px'>
                    <InputGroup>
                      <InputLeftElement
                        w='56px'
                        pointerEvents='none'
                        borderLeftRadius='5px'
                        borderY='solid 1px #CACACA'
                        borderLeft='solid 1px #CACACA'
                        bgColor='#E6E6E6'
                      >
                        <Text as='span' size='20' variant='small'>
                          {name}
                        </Text>
                      </InputLeftElement>
                      <Input
                        type='number'
                        placeholder={item.label || ''}
                        variant='outline'
                        pl='76px'
                        borderRadius='5px'
                      />
                    </InputGroup>
                  </FormControl>
                </Fragment>
              ))}
            </form>
          )}
          {nestedItems &&
            nestedItems.map((item, index) => (
              <Fragment key={item.label}>
                <Dropdown
                  name={item.label}
                  items={item.value[index]}
                  type='button'
                  level='2'
                  search={search}
                  selectedCategory={selectedCategory}
                />
              </Fragment>
            ))}
        </VStack>
      </VStack>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
