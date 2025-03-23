export default function FitScale() {
    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-4">Fit Scale</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Small", percentage: 2 },
            { label: "True To Size", percentage: 100 },
            { label: "Large", percentage: 80 },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xs text-center mb-1">{item.percentage}%</div>
              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-center">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  