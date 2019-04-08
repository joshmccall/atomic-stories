import * as React from 'react';
import { BaseComponent, IColumn, ShimmeredDetailsList, SelectionMode, Toggle, buildColumns } from 'office-ui-fabric-react';
import { PeoplePickerTypesExample } from './IPeoplePickerExampleState';
import { ShimmerLoadDataExample } from './ShimmerLoadDataExample';
import { PersonaBasicExample } from './Personas';
import { ButtonDefaultExample } from './IButtonBasicExampleStyleProps';
import { createListItems, IExampleItem } from 'office-ui-fabric-react/lib/utilities/exampleData';
export type SeachCardExampleProps = {
    preSelected: boolean;
    image: boolean;
    presence: boolean;
    hidePersonaDetails: boolean;
};
export class SeachCardExample extends BaseComponent<SeachCardExampleProps & any> {
    render() {
        const { preSelected, image, presence, hidePersonaDetails } = this.props;
        return <>
            <h1 style={{ marginBottom: 20, textAlign: 'center', width: 400 }}>CELA Contacts</h1>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: 15, padding: 15, width: 400 }}>
                <PeoplePickerTypesExample delayResults={true} hideHeader preSelected={preSelected} />
            </div>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: 5, width: 450 }}>
                <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', paddingBottom: 25, paddingRight: 25, paddingLeft: 25, width: 400 }}>
                    <div style={{ marginBottom: 10 }} />
                    {!preSelected ?
                        <ShimmerLoadDataExample /> :
                        <PersonaBasicExample presence={presence} image={image} hideHeader hidePersonaDetails={hidePersonaDetails} />}
                    <div style={{ marginBottom: 10 }} />

                    <ButtonDefaultExample primary text={"Contact"} />
                </div>
            </div>
        </>;
    }
}
const fileIcons: {
    name: string;
}[] = [
        { name: 'accdb' },
        { name: 'csv' },
        { name: 'docx' },
        { name: 'dotx' },
        { name: 'mpt' },
        { name: 'odt' },
        { name: 'one' },
        { name: 'onepkg' },
        { name: 'onetoc' },
        { name: 'pptx' },
        { name: 'pub' },
        { name: 'vsdx' },
        { name: 'xls' },
        { name: 'xlsx' },
        { name: 'xsn' }
    ];
const ITEMS_COUNT = 500;
const INTERVAL_DELAY = 2500;
let _items: IExampleItem[];
export interface IShimmerApplicationExampleState {
    items?: IExampleItem[];
    columns?: IColumn[];
    isDataLoaded?: boolean;
}
export class ShimmerApplicationExample extends BaseComponent<{
    isDataLoaded?: boolean;
} & any, IShimmerApplicationExampleState> {
    private _lastIntervalId: number | undefined;
    private _lastIndexWithData: number | undefined;
    constructor(props: {}) {
        super(props);
        this.state = {
            items: [],
            columns: _buildColumns(),
            isDataLoaded: false
        };
    }
    public render(): JSX.Element {
        const { items, columns, isDataLoaded } = this.state;
        return (<div>
            <div>
                <ShimmeredDetailsList setKey="items" items={items!} columns={columns} selectionMode={SelectionMode.none} onRenderItemColumn={this._onRenderItemColumn} enableShimmer={!isDataLoaded} listProps={{ renderedWindowsAhead: 0, renderedWindowsBehind: 0 }} />
            </div>
            {this.props.isDataLoaded && <Toggle label="Toggle to load content" style={{ display: 'block', marginBottom: '20px' }} checked={isDataLoaded} onChange={this._onLoadData} onText="Content" offText="Shimmer" />}
        </div>);
    }
    private _loadData = (): void => {
        this._lastIntervalId = this._async.setInterval(() => {
            const randomQuantity: number = Math.floor(Math.random() * 10) + 1;
            const itemsCopy = this.state.items!.slice(0);
            if (this._lastIndexWithData) {
                itemsCopy.splice(this._lastIndexWithData, randomQuantity, ..._items.slice(this._lastIndexWithData, this._lastIndexWithData + randomQuantity));
                this._lastIndexWithData += randomQuantity;
            }
            this.setState({
                items: itemsCopy
            });
        }, INTERVAL_DELAY);
    };
    private _onLoadData = (ev: React.MouseEvent<HTMLElement>, checked?: boolean): void => {
        if (!_items) {
            _items = createListItems(ITEMS_COUNT);
            _items.map((item: IExampleItem) => {
                const randomFileType = this._randomFileIcon();
                item.thumbnail = randomFileType.url;
            });
        }
        let items: IExampleItem[];
        const randomQuantity: number = Math.floor(Math.random() * 10) + 1;
        if (checked) {
            items = _items.slice(0, randomQuantity).concat(new Array(ITEMS_COUNT - randomQuantity));
            this._lastIndexWithData = randomQuantity;
            this._loadData();
        }
        else {
            items = [];
            if (this._lastIntervalId) {
                this._async.clearInterval(this._lastIntervalId);
            }
        }
        this.setState({
            isDataLoaded: checked,
            items: items
        });
    };
    private _onRenderItemColumn = (item?: IExampleItem, index?: number, column?: IColumn): JSX.Element | string | number => {
        if (item && column) {
            if (column && column.key === 'thumbnail') {
                return <img src={item.thumbnail} />;
            }
            return item[column.key as keyof IExampleItem];
        }
        return <img />;
    };
    private _randomFileIcon(): {
        docType: string;
        url: string;
    } {
        const docType: string = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;
        return {
            docType,
            url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
        };
    }
}
function _buildColumns(): IColumn[] {
    const _item = createListItems(1);
    const columns: IColumn[] = buildColumns(_item);
    for (const column of columns) {
        if (column.key === 'thumbnail') {
            column.name = 'FileType';
            column.minWidth = 16;
            column.maxWidth = 16;
            column.isIconOnly = true;
            column.iconName = 'Page';
            break;
        }
    }
    return columns;
}
