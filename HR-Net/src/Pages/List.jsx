import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

const List = () => {

    const nodes = [
        {
          id: '0',
          name: 'Shopping List',
          deadline: new Date(2020, 1, 15),
          type: 'TASK',
          isComplete: true,
          nodes: 3,
        },
      ];

    const data = { nodes };

    const BASELINE_THEME = {
        Table: '',
        Header: '',
        Body: '',
        BaseRow: `
          font-size: 16px;
        `,
        HeaderRow: `
          color: #2c3e50;
        `,
        Row: `
          color: #2c3e50;
      
          &.disabled {
            color: #2c3e50;
          }
      
          &:hover {
            color: #2c3e50;
          }
      
          &:not(:last-of-type) > .td {
            border-bottom: 1px solid #CCCCCC;
          }
        `,
        BaseCell: `
          padding: 6px 12px;
        `,
        HeaderCell: `
          font-weight: bold;
          border-bottom: 1px solid #CCCCCC;
      
          .resizer-handle {
            background-color: #2c3e50;
          }
      
          svg,
          path {
            fill: currentColor;
          }
        `,
        Cell: `
        padding: 2rem 0;
          &:focus {
            outline: dotted;
            outline-width: 1px;
            outline-offset: -1px;
          }
        `,
      };
  
    const pagination = usePagination(data, {
      state: {
        page: 0,
        size: 2,
      },
      onChange: onPaginationChange,
    });
  
    function onPaginationChange(action, state) {
      console.log(action, state);
    }
  
    const COLUMNS = [
      { label: "FirstName", renderCell: (item) => item.name },
      { label: "LastName", renderCell: (item) => item.name },
      {
        label: "Start Date",
        renderCell: (item) =>
          item.deadline.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
      },
      { label: "Department", renderCell: (item) => item.name },
      {
        label: "Date of Birth",
        renderCell: (item) =>
          item.deadline.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
      },
      { label: "Street", renderCell: (item) => item.name },
      { label: "City", renderCell: (item) => item.name },
      { label: "State", renderCell: (item) => item.name },
      { label: "Zip Code", renderCell: (item) => item.name },
    ];

    return (
        <>
        <h2>Current Employee</h2>
        <div className="table__container">
            <CompactTable
                columns={COLUMNS}
                data={data}
                theme={BASELINE_THEME}
                pagination={pagination}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>
                <span>
                Page:{" "}
                {pagination.state.getPages(data.nodes).map((_, index) => (
                    <button
                    key={index}
                    type="button"
                    style={{
                        fontWeight: pagination.state.page === index ? "bold" : "normal",
                    }}
                    onClick={() => pagination.fns.onSetPage(index)}
                    >
                    {index + 1}
                    </button>
                ))}
                </span>
            </div>
        </div>
        </>
    );
};

export default List;